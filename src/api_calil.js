/*

 カーリル APIライブラリ

 Copyright (c) 2016 CALIL Inc.
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php

 */

import request from 'superagent';
import legacyIESupport from 'superagent-legacyiesupport';

// Todo: タイムアウトの実装

var ENDPOINT = 'https://api.calil.jp/';

/**
 * カーリル APIにアクセスするための共通関数
 * @param command APIのコマンド
 * @returns {Object}
 * @private
 */
function _request(command) {
  var req = request.get(ENDPOINT + command);
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  if (canUseDOM) req.use(legacyIESupport);
  return req
}

/** 蔵書検索APIクラス  */
export class check {
  /**
   * 蔵書検索API起動
   * @param callback - コールバック関数
   */
  constructor(appkey, isbns, sytemids, callback) {
    this.appkey = appkey;
    this.callback = callback;
    this.killed = false;
    this.data = null;
    this.session = null;
    this.pollingInterval = 1000; // ポーリング間隔
    this.pollingTime = 0;
    this.pollingTimeout = 300000; // タイムアウト
    this.search(isbns, sytemids);
  }

  /**
   * 検索の中止
   */
  kill() {
    this.killed = true;
    this.pollingTime = 0;
  }

  search(isbns, systemids) {
    if (!this.killed) {
      _request('check').query({
          appkey : this.appkey,
          isbn: isbns,
          systemid: systemids,
          format: 'json',
          callback: 'no'
        }).end((err, res) => {
        if (!err) {
          this.receive(res.body);
        } else {
          setTimeout(()=> this.search(), this.pollingInterval)
        }
      })
    }
  }

  polling() {
    if (!this.killed) {
      _request('check')
        .query({
          appkey: this.appkey,
          session: this.session,
          callback: 'no'
        })
        .end((err, res) => {
          if (!err) {
            this.receive(res.body)
          } else {
            setTimeout(()=> this.polling(), this.pollingInterval)
          }
        })
    }
  }

  receive(data) {
    if (!this.killed) {
      this.data = data;
      if (this.pollingTime >= this.pollingTimeout) {
        this.data.status = 'timeout';
      }
      if(this.data.session) {
        this.session = this.data.session;
      }
      this.callback(this.data);
      if (this.data.continue === 1) {
        console.log('[Calil] continue...');
        setTimeout(()=> this.polling(), this.pollingInterval);
      } else {
        console.log('[Calil] complete.');
      }
      this.pollingTime += this.pollingInterval;
    }
  }
}
