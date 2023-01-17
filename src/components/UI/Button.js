const Button = props => {
    return (
      <button
        className={`bg-[#4D5B9E] text-[#F5F7FB] rounded-2xl px-12 py-4 ${props.className}`}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
}

export default Button