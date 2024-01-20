import FooChild from "./FooChild";

let callbackFunction = () => {
    console.log("hello world")
}

const FooParent = () => {
    return (
        <div>
            <FooChild fname={"Hassan"} callbackFunction={callbackFunction} />
        </div>
    );
};

export default FooParent;