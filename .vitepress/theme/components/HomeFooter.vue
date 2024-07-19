<template>
    <footer class="bg-alt f12 lh-1" style="text-align: center; margin: 0 auto">
        <div class="flex" style="display: inline-block">
            <span class="ml1">
                <a target="_blank" href="https://beian.miit.gov.cn/" name="ICP备案" title="ICP备案">
                    <i class="fas fa-earth-americas" style="margin-right: 4px"></i>鄂ICP备2024060426号
                </a>
            </span>
            <span class="ml1">
                <a target="_blank" href="https://beian.mps.gov.cn/" name="公安备案" title="公安备案">
                    <i class="fas fa-shield" style="margin-right: 4px"></i>粤公网安备44200102445439号
                </a>
            </span>
        </div>
        <div class="flex ma4" style="display: inline-block">
            <span class="ml1">
                Copyright <i class="far fa-copyright"></i> 2019 -
                {{ new Date().getFullYear() }}
                <a target="_blank" name="GitHub" title="GitHub" href="https://github.com/Theo-Messi">Theo-Messi</a>. All
                Rights
                Reserved
            </span>
        </div>
    </footer>
</template>

<script lang="ts">


</script>

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

.bg-alt {
    background: var(--vp-c-bg-alt);
}

.lh-1 {
    line-height: 1.2rem;
}

.flex {
    display: flex;

    &-grow-1 {
        flex-grow: 1;
    }
}

.ma4 {
    margin: 1.5rem;
}

.ma2 {
    margin: 1rem;
}

.ml0 {
    margin-left: 0.5rem;
}

.ml1 {
    margin-left: 1rem;
}

.mb2 {
    margin-bottom: 0.5rem;
}

.f12 {
    font-size: 12px;
}

.f14 {
    font-size: 13px;
}

.fw6 {
    font-weight: 600;
}

.fb6 {
    flex-basis: 20rem;
}

@media screen and (min-width: 960px) {
    .flex-l {
        display: flex;
    }
}

@media screen and (max-width: 768px) {
    .ma4 {
        margin-left: auto;
        /* 左边距自动 */
        margin-right: auto;
        /* 右边距自动 */
        width: 100%;
        /* 宽度100% */
        max-width: 95%;
        /* 最大宽度为屏幕宽度的95% */
    }
}
</style>