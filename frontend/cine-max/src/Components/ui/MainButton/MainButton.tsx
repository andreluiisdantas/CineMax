import './MainButton.css'

type buttonProps = {
    label: string;
};

function MainButton({label}: buttonProps){
    return(
        <button className="mainButton">{label}</button>
    )
}

export default MainButton