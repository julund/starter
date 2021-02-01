
const Button = ({className = '', children, ...props}) => {
    return (
        <button {...props} 
        className={`rounded-lg px-4 py-2 border-2 border-gray-800 bg-gray-800 text-gray-200 hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800 focus:border-transparent focus:outline-none focus:shadow-outline ${className ? className : ''}`}>
            {children}
        </button>
    )
}
export default Button;