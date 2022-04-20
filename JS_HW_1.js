let item_1 = 5,
    item_2 = 3;
    item_3 = item_1 + item_2,
    item_4 = 'Yolochka',
    result_1 = item_3+item_4,
    result_2 = item_3*item_4;
    console.log (item_1, item_2, item_3, item_4, result_1, result_2),
    item_5 = item_3,
    item_6 = 15,
    item_6_type = typeof item_6;
    console.log('item_6 == ', item_6, 'item_6_type == ', item_6_type),
    item_7 = item_6.toString(),
    item_7_type = typeof item_7;
    console.log ('item_7 == ',  item_7,  'item_7_type == ',  item_7_type);
    
    age_1 = 10,
    age_2 = 18,
    age_3 = 60;
    if (age_1 < age_2) {
    console.log ("You don't have access cause your age is" , age_1 + '.' + ' ' + "It's less then need.")
    }else if (age_1 >=  age_2 && age_1 < age_3){
        console.log ('Welcome ! ')
    }else if (age_1  > age_3){
        console.log ('Keep calm and look Culture channel!')
    }else{
        console.log('Technical work')
    }

// 1*
let checkAge = function (age_1,age_2,age_3){
    if (age_1 < age_2) {
        console.log ("You don't have access cause your age is" , age_1 + '.' + ' ' + "It's less then need.")
        }else if (age_1 >=  age_2 && age_1 < age_3){
            console.log ('Welcome ! ')
        }else if (age_1  > age_3){
            console.log ('Keep calm and look Culture channel!')
        }else{
            console.log('Technical work')
        }}

checkAge(17,18,61)