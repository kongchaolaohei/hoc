<template>
  <button
    class="imf-btn"
    :class="[type, disabled && 'is-disabled']"
    @click="handleClick"
  >
    <div v-if="prevfixImgClass" :class="`${prevfixImgClass} ${prevfixImgClass ? 'prev-img' : ''} img`"/>
    <i
      v-if="prevfixClass" :class="`${prevfixClass} ${prevfixClass ? 'prev-icon' : ''} icon`"
    />
    <div class="content">
      <slot />
    </div>
    <i
      v-if="suffixClass" :class="`${suffixClass} ${suffixClass ? 'suffix-icon' : ''} icon`"
    />
    <div v-if="suffixImgClass" :class="`${suffixImgClass} ${suffixImgClass ? 'suffix-img' : ''} img`"/>
  </button>
</template>

<script>

export default {
  name: 'imf-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    prevfixImgClass: {
      type: String,
      default: ''
    },
    suffixImgClass: {
      type: String,
      default: ''
    },
    prevfixClass: {
      type: String,
      default: ''
    },
    suffixClass: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary' // primary link
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) return
      this.$emit('click')
    }
  }
};
</script>
<style lang="scss" scoped>
.imf-btn {
  vertical-align: bottom;
  font-size: 15px;
  .img {
    display: inline-flex;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
  .prev-img, .prev-icon {
    margin-right: 6px;
  }
  .suffix-img, .suffix-icon {
    margin-right: 6px;
  }
}
.imf-btn.primary {
  display: inline-flex;
  align-items: center;
  height: 32px;
  background: linear-gradient(180deg, rgba(0,204,255,0.7) 0%, rgba(0,204,255,0) 100%);
  border: 1px solid #00CCFF;
  color: #00CCFF;
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, rgba(0,204,255,0.7) 0%, rgba(0,204,255,0) 100%);
  }
}
.imf-btn.link {
  align-items: center;
  color: #00CCFF;
  border: none;
  background: transparent;
  padding: 0 16px;
  cursor: pointer;
}
</style>
