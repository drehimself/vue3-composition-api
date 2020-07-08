<template>
  <div class="border-t border-gray-500 py-2 mt-1">
    <div>x: {{ mouseX }}</div>
    <div>y: {{ mouseY }}</div>
  </div>
</template>

<script>
import { useMousePosition } from '../functions/useMousePosition'

export default {
 setup() {
   const { x: mouseX, y: mouseY } = useMousePosition()

   return {
     mouseX,
     mouseY,
   }
 }
}
</script>
