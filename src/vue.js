// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data () {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {
          title: 'Основы',
          text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.',
          isCompleted: false
        },
        {
          title: 'Компоненты',
          text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.',
          isCompleted: false
        },
        {
          title: 'Роутер',
          text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
          isCompleted: false
        },
        {
          title: 'Vuex',
          text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.',
          isCompleted: false
        },
        {
          title: 'Composition',
          text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.',
          isCompleted: false
        },
      ],
      content: '',
      isFinished: false,
      buttonText: 'Вперед'
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      this.activeIndex--
      this.setActive(this.activeIndex)
      // this.content = this.steps[this.activeIndex].text
    },
    reset() {
      // начать заново
      this.isFinished = false
      this.activeIndex = 0
      this.setActive(this.activeIndex)
    },
    nextOfFinish() {
      // кнопка вперед или закончить
      if (this.activeIndex < this.steps.length -1)
        this.activeIndex++
      else
        this.isFinished = true

      console.log(this.isFinished)
      this.setActive(this.activeIndex)
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      if (!this.isFinished)
      {
        this.activeIndex = idx
        this.content = this.steps[idx].text
        this.steps.map((item, idx) => {
          item.isCompleted = idx < this.activeIndex
        })

        this.buttonText = idx === this.steps.length - 1 ? 'Закончить' : 'Вперед';
      }
    }
  },
  mounted () {
    this.reset()
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    isActive: () => this.activeIndex,
    // 2. выключена ли кнопка назад
    isCanBack () { return this.activeIndex > 0 } ,
    // 3. находимся ли мы на последнем шаге
    isLastStep: (idx) => idx > (this.steps.length - 1),
  }
}

Vue.createApp(App).mount('#app')