const Row = ({ index }) => {
    return (
        <div
        key={index}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '35px',
            borderBottom: '1px solid #ccc',
        }}
        >
        Row {index}
        </div>
    );
}

export default Row;