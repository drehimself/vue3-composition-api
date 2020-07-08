import { ref, reactive, onMounted, onUnmounted, toRefs } from 'vue'

export function useMousePosition() {
  // const x = ref(0)
  // const y = ref(0)

  const pos = reactive({
    x: 0,
    y: 0,
  })

  function update(e) {
    pos.x = e.pageX
    pos.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return toRefs(pos)
}
