<template>
  <div>
    <div class="icon-wrapper" v-html="svg"></div>
    <slot></slot>
  </div>
</template>

<script>
import feather from 'feather-icons'
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: 'icon',
        width: this.width,
        height: this.height
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
