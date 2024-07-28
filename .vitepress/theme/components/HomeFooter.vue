<template>
  <footer class="ba">
    <!-- 底部信息栏 -->
    <div class="ff" style="display: inline-block">
      <span>
        <a target="_blank" href="https://beian.miit.gov.cn/" name="ICP备案" title="ICP备案">
          <i class="fas fa-earth-americas"></i>鄂ICP备2024060426号
        </a>
      </span>
      <span>
        <a target="_blank" href="https://beian.mps.gov.cn/" name="公安备案" title="公安备案">
          <i class="fas fa-shield"></i>粤公网安备44200102445439号
        </a>
      </span>
    </div>
    <div class="flex" style="display: inline-block">
      <span>
        Copyright<i class="far fa-copyright"></i>2019 - {{ new Date().getFullYear() }}
        <a target="_blank" name="GitHub" title="GitHub" href="https://github.com/Theo-Messi">Theo-Messi</a>. All Rights
        Reserved
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* 页脚 */
footer {
  width: 100%;

  a:hover {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  .has-sidebar~& {
    display: none;
  }
}

span {
  margin-left: 1rem;
}

i {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}

.external-link {
  position: relative;
  display: inline-block;

  &::after {
    content: '\f061';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    font-size: 0.5rem;
    position: absolute;
    color: var(--vp-c-text-3);
    transform: rotate(-45deg);
  }
}

.ba {
  background: var(--vp-c-bg-alt);
  font-size: 0.75rem;
  text-align: center;
  margin: 0 auto;
}

.ff {
  display: flex;
  justify-content: center;
  margin: 1.25rem;

  &-grow-1 {
    flex-grow: 1;
  }
}

.flex {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;

  &-grow-1 {
    flex-grow: 1;
  }
}
</style>
