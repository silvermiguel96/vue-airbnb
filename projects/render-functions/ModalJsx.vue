<script>
export default {
  name: 'ModalJsx',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return (this.show) ? <div class="modal">
      <p>{this.$slots.default}</p>
      <button onClick={this.clickCancelHandler}>Cancel</button>
      <button onClick={this.ClickOkHandler}>Ok</button>
    </div>: null
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