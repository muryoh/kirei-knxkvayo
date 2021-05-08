import { packd_export_0 } from 'https://srv.divriots.com/packd/@kirei/element';const { defineComponent,html,css,ref } = packd_export_0;;
defineComponent({
  name: 'MyCounter',
  props: {},
  styles: css`* {
  font-size: 200%;
}

span {
  width: 4rem;
  display: inline-block;
  text-align: center;
}

button {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  background-color: seagreen;
  color: white;
}
  `,

  setup(props, ctx) {
    const count = ref(0);

    function dec() {
      count.value--;
    }

    function inc() {
      count.value++;
    }

    return () => html`
      <button @click=${dec}>-</button>
      <span>${count}</span>
      <button @click=${inc}>+</button>
    `;
  }

});