function gladiatorInventory(arr) {
    let equipment = arr.shift().split(' ')
    let arrCopy = arr.slice(0)
    for (const el of arrCopy) {
        let [command, item] = arr.shift().split(' ')

        switch (command) {
            case 'Buy':
                if (!equipment.includes(item)) {
                    equipment.push(item);
                }
                break;
            case 'Trash':
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    equipment.splice(index, 1);
                }
                break;
            case 'Repair':
                if (equipment.includes(item)) {
                    let index = equipment.indexOf(item);
                    let repairItem = equipment.splice(index, 1);
                    equipment.push(repairItem[0])
                }
                break;
            case 'Upgrade':
                let elItem = item.split('-')

                if (equipment.includes(elItem[0])) {
                    let firstElItem = elItem[0]
                    let index = equipment.indexOf(firstElItem);
                    equipment.splice(index + 1, 0, elItem.join(':'));
                }
                break;
        }
    }
    console.log(equipment.join(' '))
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)