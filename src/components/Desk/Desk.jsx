import './Desk.scss';
import CardWords from '../Words/Words';
import Words from '../Data/Data';
import { useState } from 'react';

export default function Desk(props) {
    const [emptyId, setTranslate] = useState(true);

    const showTranslate = (id) => {
        setTranslate(id);
    }

    return (
        <div className='desk'>
            {Words.map((word) =>
                <CardWords
                    key={word.id}
                    id={word.id}
                    eng={word.eng}
                    transcription={word.transcription}
                    rus={word.rus}
                    topic={word.topic}
                    emptyId={emptyId}
                    setTranslate={setTranslate}
                    showTranslate={showTranslate}
                />
            )}
        </div>

    );
}