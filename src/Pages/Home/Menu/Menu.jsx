import MenuContent from "./MenuContent";


const Menu = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white py-28">
            {/* Image */}
            <div>
                <img className="mx-auto" src="https://i.ibb.co/RDSKfWv/image.png" alt="" />
            </div>

            <div>
                <MenuContent></MenuContent>
            </div>
        </div>
    );
};

export default Menu;