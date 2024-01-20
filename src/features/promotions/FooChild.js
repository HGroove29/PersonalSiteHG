const FooChild = ({ fname, callbackFunction }) => {
    callbackFunction()
    return (
        <div>First Name: {fname}</div>
    );
};

export default FooChild;