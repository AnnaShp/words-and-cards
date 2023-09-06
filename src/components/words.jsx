import './words.css'

function CardWords(props) {
    return (
        <div className="word-card">
            <h2 className='word-eng'>{props.eng}</h2>
            <div className='word-transcription'>{props.transcription}</div>
            <h3 className='word-rus'>{props.rus}</h3>

            <div className='word-topic'>'Topic:' {props.topic}</div>
        </div>
    );
}

export default CardWords;