export default {
  namespaced: true,
  state() {
    return {
      portfolio: [
        {
          title: 'Онлайн-магазин',
          url: 'https://online-store-vue.web.app/',
          github: 'https://github.com/dudeVladimir/online-store',
          description: `Онлайн магазин с фильтрами по категориям, созданием и сохранением заказов в БД, регистрацией пользователей. Vue 3 Composition API, Vuex, Vue Router, Scss, Axios, FakeStoreAPI.`,
          img: 'online-store.jpg',
        },
        {
          title: 'Заметки',
          url: 'https://note-list-bem-vue.web.app/auth',
          github: 'https://github.com/dudeVladimir/black-notepad/',
          description:
            'Это приложение написано с использованием Composition API. Система авторизации, регистрации и БД - Firebase. Использованны VueJS, Vuex, VueRouter, Axios - для работы с запросами к Firebase, для валидации форм использованны vee-validate & yup',
          img: 'notes.jpg',
        },
        {
          title: 'ToDo List',
          url: 'https://to-do-list-vue-dudkin.web.app/',
          github: 'https://github.com/dudeVladimir/todo-list',
          description:
            'Простой список дел, реализован через localStorage. Использованны: Vue, vuex, composition api',
          img: 'todo.jpg',
        },
        {
          title: 'Cute Cats',
          url: 'https://vue-cat.web.app/',
          github: 'https://github.com/dudeVladimir/cats',
          description: 'Посмотреть и полайкать котов :)',
          img: 'cats.jpg',
        },
        {
          title: 'Резюме',
          github: 'https://github.com/dudeVladimir/resume-vue',
          description: 'Ссылка на само резюме в GitHub',
          img: 'resume.jpg',
        },
      ],
    }
  },
}
