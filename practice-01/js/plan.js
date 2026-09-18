"use strict";

const totalTasks = 15;
const completedTasks = 0;
const dailyLimit = 4;

if (typeof totalTasks === "number" && typeof completedTasks === "number" && typeof dailyLimit === "number" && totalTasks >= 0 && totalTasks <= 1000 && completedTasks >= 0 && completedTasks <= totalTasks && dailyLimit > 0 && dailyLimit <= 1000 && Number.isInteger(totalTasks) && Number.isInteger(completedTasks) && Number.isInteger(dailyLimit)){
    if (totalTasks === completedTasks) {
        console.log("Все задачи выполнены");
    } else {
        let remainingTasks = totalTasks - completedTasks;
        const days = Math.ceil(remainingTasks / dailyLimit);
        let cnt = 0;
        console.log("Осталось задач: ", remainingTasks);
        while (cnt !== days) {
            if (remainingTasks > dailyLimit) {
                console.log("День ", cnt + 1, ": ", "Выполнено ", dailyLimit, ", осталось ", remainingTasks - dailyLimit);
                remainingTasks -= dailyLimit;
            }else{
                console.log("День ", cnt + 1, ": ", "Выполнено ", remainingTasks, ", осталось 0");
            }
            cnt++;
        }
        console.log("Потребуется дней: ", days)
    }
}else if (typeof totalTasks !== "number" || typeof completedTasks !== "number" || typeof dailyLimit !== "number") {
    console.log("Ошибка: totalTasks, completedTasks и dailyLimit должны быть числами");
}else if (totalTasks === 0 && completedTasks === 0) {
    console.log("Задач пока нет");
}else if (Number.isInteger(totalTasks) === false || Number.isInteger(completedTasks) === false || Number.isInteger(dailyLimit) === false) {
    console.log("Ошибка: totalTasks, completedTasks и dailyLimit должны быть целыми числами");
}else if (totalTasks < 0 || totalTasks > 1000) {
    console.log("Ошибка: totalTasks должно быть в диапазоне от 0 до 1000");
}else if (completedTasks < 0 || completedTasks > totalTasks) {
    console.log("Ошибка: completedTasks должно быть в диапазоне от 0 до totalTasks");
}else if (dailyLimit <= 0 || dailyLimit > 1000) {
    console.log("Ошибка: dailyLimit должно быть в диапазоне от 1 до 1000");
};