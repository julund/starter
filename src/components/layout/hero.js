import Modal from '../modal'
import Button from "../button";

const Hero = props => (
    <div className="flex-grow-0 p-4 bg-gray-600 h-full">
        <div className="container mx-auto p-4">
            <div className="font-title text-4xl my-2 text-gray-200">Next.js &amp; tailwind.css starter template</div>
            <Modal className="mx-auto p-4" trigger={
                <Button className="text-sm">Open modal</Button>}>
                <p>This is the modal.</p>
            </Modal>
            </div>
    </div>
);

export default Hero;