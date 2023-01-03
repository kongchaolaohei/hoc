<template>
  <button
    class="ief-btn"
    :class="[type, disabled && 'is-disabled']"
    @click="handleClick"
  >
    <i
      :class="`${prevfixClass} ${prevfixClass ? 'prev' : ''} icon`"
    />
    <div class="content">
      <slot />
    </div>
    <i
      :class="`${suffixClass} ${suffixClass ? 'prev' : ''} icon`"
    />
  </button>
</template>

<script>

export default {
  name: 'IEFButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
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
      default: 'plain' // primary plain link
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
$primary-bg-color: #0CC0CC;
$primary-color: #FFFFFF;
$primary-active-bg-color: #029DA7;
.ief-btn.primary {
  background: $primary-bg-color;
  color: $primary-color;
  border: none;
  vertical-align: baseline;
  height: 32px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background: $primary-active-bg-color;
    color: $primary-color;
  }
  &.is-disabled  {
    &:hover, &:active {
      background: $primary-bg-color;
      color: $primary-color;
      opacity: 0.4;
    }
    opacity: 0.4;
    cursor: not-allowed;
  }
}
$plain-bg-color: #FFFFFF;
$plain-border-color: #CED4E0;
$plain-color: #18253D;
$plain-active-bg-color: #029DA7;
$plain-hover-border-color: #0CC0CC;
$plain-hover-color: #0CC0CC;
$plain-active-border-color: #029DA7;
$plain-active-color: #029DA7;
$plain-disable-border-color: #B8C0D1;
$plain-disable-color: #B8C0D1;

.ief-btn.plain {
  background: $plain-bg-color;
  color: $plain-color;
  border: 1px solid $plain-border-color;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    color: $plain-hover-color;
    border: 1px solid $plain-hover-border-color;
  }
  &:active {
    color: $plain-active-color;
    border: 1px solid $plain-active-border-color;
  }
  &.is-disabled  {
    &:hover, &:active {
      color: $plain-disable-color;
      border: 1px solid $plain-disable-border-color;
      opacity: 1;
    }
    color: $plain-disable-color;
    border: 1px solid $plain-disable-border-color;
    cursor: not-allowed;
  }
}

$link-text-color: #0CC0CC;
.ief-btn.link {
  border: none;
  cursor: pointer;
  color: $link-text-color;
  background: transparent;
  padding: 0 8px;
  &.is-disabled  {
    cursor: not-allowed;
  }
}

.ief-btn {
  display: inline-flex;
  align-items: center;
  padding: 5px 16px;
  border-radius: 4px;
  height: 32px;
  .icon {
    display: inline-block;
    height: 20px;
    // background-image: url('~@/assets/img/bigScreenComponents/datePicker/date-pick-icon.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  
  .prev {
    width: 20px;
    margin-right: 4px;
  }
  .suf {
    width: 20px;
    margin-left: 4px;
    
  }
}
</style>
