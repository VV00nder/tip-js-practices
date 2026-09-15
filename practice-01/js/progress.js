"use strict";

const totalTasks = 15;
const completedTasks = 0;

if (typeof totalTasks === "number" && typeof completedTasks === "number" && totalTasks > 0 && totalTasks <= 1000 && completedTasks >= 0 && completedTasks <= totalTasks && Number.isInteger(totalTasks) && Number.isInteger(completedTasks)){
    let status = "";
    if (totalTasks > 0 && completedTasks === 0) {
        status = "Не начато";
    }else if (totalTasks > 0 && completedTasks > 0 && completedTasks < totalTasks) {
        status = "В работе";
    }else if (totalTasks > 0 && completedTasks === totalTasks) {
        status = "Завершено";
    }
    const progress = (completedTasks / totalTasks) * 100;
    console.log("Всего задач:", totalTasks);
    console.log("Выполнено:", completedTasks);
    console.log("Осталось:", totalTasks - completedTasks);
    console.log("Прогресс выполнения:", progress.toFixed(1) + "%");
    console.log("Статус:", status);
}else if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
    console.log("Ошибка: totalTasks и completedTasks должны быть числами");
}else if (totalTasks === 0 && completedTasks === 0) {
    console.log("Задач пока нет");
}else if (Number.isInteger(totalTasks) === false || Number.isInteger(completedTasks) === false) {
    console.log("Ошибка: totalTasks и completedTasks должны быть целыми числами");
}else if (totalTasks < 0 || totalTasks > 1000) {
    console.log("Ошибка: totalTasks должно быть в диапазоне от 0 до 1000");
}else if (completedTasks < 0 || completedTasks > totalTasks) {
    console.log("Ошибка: completedTasks должно быть в диапазоне от 0 до totalTasks");
};
