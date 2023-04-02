import FirstComponent from './FirstComponent'
import LearningJavaScript from './LearningJavaScript';
import SecondComponent from './SecondComponent'


export default function LearningComponent(){
    return(
        <div className='LearningComponent'>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <LearningJavaScript></LearningJavaScript>
        </div>
    );
}