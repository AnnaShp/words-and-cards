import './Words.css'

function CardWords(props) {
    const { id, emptyId, setTranslate, showTranslate } = props;
    return (
        <div className='word-card' onClick={() => showTranslate(id)}>
            <h2 className='word-eng'>{props.eng}</h2>
            <div className='word-transcription'>{props.transcription}</div>
            {emptyId === id ? <h3 className='word-rus'>{props.rus}</h3> : ''}
            <div className='word-topic'>'Topic:' {props.topic}</div>
        </div>
    );
}

export default CardWords;