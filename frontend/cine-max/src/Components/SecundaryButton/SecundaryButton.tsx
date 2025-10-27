import './SecundaryButton.css'

type buttonProps = {
    label: string;
};

function SecundaryButton({label}: buttonProps){
    return(
        <button className="secundaryButton">{label}</button>
    )
}

export default SecundaryButton