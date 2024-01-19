//Switch case

// switch (key) {
//     case value:
        
//         break;  // bu onemli.yazmazsak break gorene kadar kodlari calisitirir sonra gorunce donguyu kirar.

//          case value:
        
//         break;

//          case value:
        
//         break;

//          case value:
        
//         break;

//     default:  // eger dongude hicbirseyi saglamazsa en son buraya gelir ve donguyu kirar bitirir
//         break;
// }


var fruit="Muz";


switch (fruit) {
    case "Apple":
        console.log("Gelen deger Apple");
        
        break;

        case "Kiwi":
        console.log("Gelen deger Kiwi");
        
        break;

        case "Muz":
        console.log("Gelen deger Muz");
        
        break;

    default:
        console.log("Deger bulunamadi");
        break;
}



var days=[
    "pazartesi",
    "Sali",
    "Carsamba",
    "Persembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
];

switch (days[4]) {
    case "Pazartesi":
        case "Sali":
            console.log("Sali gunu");

            case "Carsamba":
                case "Persembe":
                    case "Cuma"
        
        break;

    default:
        break;
}


