<script>
export default {
  name: 'ModalCreateElement',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  render (createElement) {
    return  (this.show) ? createElement('div', {
      class: 'modal',
    }, [
      createElement('div', {
        class: 'content',
      }, this.$slots.default  ),
      createElement('button', {
        class: 'btn',
        on : {
          click: this.clickCancelHandler
        }
      }, 'Cancel'),
      createElement('button', {
        class: 'btn',
        on : {
          click: this.ClickOkHandler
        }
      }, 'OK')
    ]): null
  },
  methods: {
    clickCancelHandler() {
      console.log('Click on Cancel');
    },
    ClickOkHandler() {
      console.log('Click on OK')
    }
  }
}
</script>