import styles from './PetRecord.module.css';

export interface Pet{
    id: number;
    petName: string;
    additionalInfo: string;
    displayInfo: boolean;
    color?: string;
}

interface Props {
    pet:Pet;
}

export default function PetRecord({pet}:Props):JSX.Element {
    const{id, petName, additionalInfo, displayInfo, color} = pet;

    return (
        <div className={styles.container}> 
            <h2 style={{backgroundColor: color, fontSize: '20px'}}> {id}. {petName} </h2>
            <p>{(displayInfo)?additionalInfo:''}</p>
        </div>
    )

}