const FooChild = ({ fname, callbackFunction }) => {
    const handleButtonClick = () => {
        callbackFunction();
    };

    return (
        <div>
            <div>First Name: {fname}</div>
            <button onClick={handleButtonClick}>Click me</button>
        </div>
    );
};

export default FooChild;