<template>
  <div class="card">
    <h3>Форма обратной связи</h3>
    <form @submit.prevent="onSubmit">
      <div :class="['form-control', { invalid: nError }]">
        <label for="name">ФИО</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div :class="['form-control', { invalid: cError }]">
        <label for="company">Название организации</label>
        <input type="text" id="company" v-model="company" />
      </div>
      <div :class="['form-control', { invalid: eError }]">
        <label for="email">eMail</label>
        <input
          type="email"
          id="email"
          placeholder="e@mail.com"
          v-model="email"
        />
      </div>
      <div :class="['form-control', { invalid: pError }]">
        <label for="phone">Телефон</label>
        <input
          type="phone"
          id="phone"
          placeholder="+79XXXXXXXXX"
          v-model="phone"
        />
      </div>
      <div :class="['form-control', { invalid: mError }]">
        <label for="more-info">Дополнительная информация</label>
        <textarea
          name="more-info"
          id="more-info"
          rows="10"
          placeholder="Укажите предпочтительное время связи..."
          v-model="moreInfo"
        ></textarea>
      </div>
      <button class="btn" :disabled="isSubmiting">Отправить</button>
    </form>
  </div>
</template>

<script>
import { useFeedbackForm } from '@/use/feedback-form'

export default {
  setup() {
    return { ...useFeedbackForm() }
  },
}
</script>

<style scoped>
.card {
  margin: 0;
}

h3 {
  text-align: center;
}

.btn {
  margin-bottom: 5px;
}

.btn:disabled {
  cursor: not-allowed;
  background-color: gray;
}
</style>
