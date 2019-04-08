import {Alert} from 'react-native';
import {db} from './db';
export const AddTeam =(item1,item2,item3,item4,item5,item6, nameTeam,regions) =>{
    db.ref('Teams').child(nameTeam).set({
        name:nameTeam,
        region:regions,
        pokemon1:item1,
        pokemon2:item2,
        pokemon3:item3,
        pokemon4:item4,
        pokemon5:item5,
        pokemon6:item6,
    }).then(()=>{Alert.alert('Team Successfully Entered');}).catch((error)=>{
        console.log(error);
    });
}