
const person = {
    name: 'Irshad',
    address: {
        line1: 'Jalpura',
        city: 'Greater Noida',
        country: 'India'
    },
    profiles: ['twitter', 'instagram', 'facebook'],
    printProfiles: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}

export default function LearningJavaScript() {
    return (
        <div className="LearningJavaScript">
        <div>Name: {person.name}</div>
        <div>Address: {person.address.line1}</div>
        <div>Profiles: {person.profiles[0]}</div>
        <div>{person.printProfiles()}</div>
        </div>
    );
}