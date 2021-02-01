const Main = props => {
    return (
        <main className="flex flex-col flex-grow bg-gray-100 text-sm">
            {props.children}
        </main>
    )
};

export default Main;