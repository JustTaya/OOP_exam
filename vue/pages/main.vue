<template>
    <div>
        <h1>Роботу виконала студентка групи К-28</h1>
        <h1>Величко Таїсія Сергіївна</h1>

        <table>
            <tr>
                <td>Предметна область</td>
                <td>Посадові особи</td>
            </tr>
            <tr>
                <td>Тип списку</td>
                <td>Однозв'язний</td>
            </tr>
            <tr>
                <td>Типи дерев</td>
                <td>R-B, B+</td>
            </tr>
            <tr>
                <td>Алгоритми сортування</td>
                <td>Insertion, Quicksort, Heap, Radix</td>
            </tr>
        </table>
    </div>
</template>

<script>
    module.exports = {
        name: "main"
    };
</script>

<style scoped>
    td {
        padding: 4px 8px 4px 0;
        font-weight: bold;
    }

    td + td {
        font-weight: normal;
    }
</style>