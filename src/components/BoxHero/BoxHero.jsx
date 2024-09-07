import './BoxHero.css';
import Button from '../Button/Button';
import Title from '../Title/Title';

export default function BoxHero({ box, onReadMore }) {
    return (
        <div className='w-100 transparent-background text-color px-2 py-5 d-flex flex-column align-items-center gap-2 border-top-main'>
            <Title title={box?.head} withAfter={false}/>
            <p>{box?.text}</p>
            <Button 
                buttonContainer='Read More' 
                px='px-2' 
                pxa='px-4' 
                border='border-0' 
                pop={true}
                onClick={onReadMore}
            />
        </div>
    );
}

// import './BoxHero.css';
// import Button from '../Button/Button';
// import Title from '../Title/Title';
// export default function BoxHero({ box }) {
//     return (
    //         <div className='w-100 transparent-background text-color px-2 py-5 d-flex flex-column align-items-center gap-2 border-top-main'>
    //             <Title title={box?.head} withAfter={false}/>
    //             <p>{box?.text}</p>
    //             <Button buttonContainer='Read More' px='px-2' pxa='px-4' border='border-0' />
    //         </div>
    //     );
    // }