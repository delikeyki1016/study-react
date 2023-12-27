import EventBinding from "./Test1-EventBinding";
import AsyncStateChange from "./Test2-AsyncStateChange";
import ControlledComponent from "./Test3-ControlledComponent";
import UncontrolledComponent from "./Test4-UncontrolledComponent";

const EventComponent = () => {
    return (
        <div>
            <EventBinding />
            <AsyncStateChange />
            <ControlledComponent />
            <UncontrolledComponent />
        </div>
    )
}

export default EventComponent