import "./Logo.css";

const Logo = props => (
    <div className="Logo">
        <img src={`${process.env.PUBLIC_URL}/${props.image}`} alt="logo" />
    </div>
);

export default Logo;