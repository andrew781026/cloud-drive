<script>
    export default {
        name: "ButtonStyling"
    }
</script>

<style lang="scss">

    $gray-light: #ddf;
    $brand-primary: #ddf;
    $brand-accent: #ddf;

    $btn-config: (
            default:(
                    class: 'default',
                    color: $gray-light,
                    bg: #fff,
                    border-color: #ccc
            ),
            primary:(
                    class: 'primary',
                    color: #fff,
                    bg: $brand-primary,
                    border-color: $brand-primary
            ),
            accent:(
                    class: 'accent',
                    color: #fff,
                    bg: $brand-accent,
                    border-color: $brand-accent
            ),
            info:(
                    class: 'info',
                    color: #fff,
                    bg: #909399,
                    border-color: #909399
            ),
            first:(
                    class: 'first',
                    color: #fff,
                    bg: #2c94ff,
                    border-color: #2c94ff
            ),
            blue:(
                    class: 'blue',
                    color: #2424ef,
                    bg: #fff,
                    border-color: #fff
            ),
            green:(
                    class: 'green',
                    color: #fff,
                    bg: #128d3f,
                    border-color: #128d3f
            ),
    );

    // @mixin 運算
    @mixin button-variant($color, $background, $border) {
        color: $color;
        background-color: $background;
        transition: background-color .15s;
        border-color: $border;

        &:hover,
        &:focus,
        &.focus,
        .open > &.dropdown-toggle {
            color: $color;
            background-color: darken($background, 6%);
            border-color: darken($border, 8%);
        }

        &:active,
        &.active {
            color: $color;
            background-color: darken($background, 10%);
            border-color: darken($border, 14%);
        }

        &:active,
        &.active,
        .open > &.dropdown-toggle {
            background-image: none;
        }
        &.disabled,
        &[disabled],
        fieldset[disabled] & {
            &,
            &:hover,
            &:focus,
            &.focus,
            &:active,
            &.active {
                background-color: $background;
                border-color: $border;
            }
        }

        .badge {
            color: $background;
            background-color: $color;
        }
    }

    // 基本 btn 結構
    .btn {
        // 結構
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px ;
        margin-bottom: 0;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 10px;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 7px 1px rgba(0, 0, 0, 0.3);

        &:hover, &:focus {
            color: #333;
            background-color: #e6e6e6;
            outline: 0;
        }

        &:active {

            /* offset-x | offset-y | blur-radius | spread-radius | color */
            box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.4);
        }
    }

    @each $name, $value in $btn-config {
        $class: map-get($value, class);
        $color: map-get($value, color);
        $bg: map-get($value, bg);
        $border-color: map-get($value, border-color);

        .btn-#{$class} {
            @include button-variant($color, $bg, $border-color);
        }
    }


    /* ---------- info ----------------- */
    .ezoom-button--info {
        color: #FFF;
        background-color: #909399;
        border-color: #909399;
    }

    .ezoom-button--info:focus,
    .ezoom-button--info:hover {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #FFF
    }

    .ezoom-button--info.is-active,
    .ezoom-button--info:active {
        background: #82848a;
        border-color: #82848a;
        color: #FFF
    }

    .ezoom-button--info:active {
        outline: 0
    }

    .ezoom-button--info.is-disabled,
    .ezoom-button--info.is-disabled:active,
    .ezoom-button--info.is-disabled:focus,
    .ezoom-button--info.is-disabled:hover {
        color: #FFF;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
        cursor: not-allowed;
    }

    /* ---------- primary ----------------- */
    .ezoom-button--primary {
        color: #FFF;
        background-color: #2c94ff;
        border-color: #2c94ff
    }

    .ezoom-button--primary:focus,
    .ezoom-button--primary:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #FFF
    }

    .ezoom-button--primary.is-active,
    .ezoom-button--primary:active {
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #FFF
    }

    .ezoom-button--primary:active {
        outline: 0
    }

    .ezoom-button--primary.is-disabled,
    .ezoom-button--primary.is-disabled:active,
    .ezoom-button--primary.is-disabled:focus,
    .ezoom-button--primary.is-disabled:hover {
        color: #FFF;
        background-color: #c9e4ff;
        border-color: #c9e4ff;
        cursor: not-allowed;
    }

    /* ---------- secondary ----------------- */
    .ezoom-button--secondary {
        color: #FFF;
        background-color: #92d945;
        border-color: #92d945;
    }

    .ezoom-button--secondary:focus,
    .ezoom-button--secondary:hover {
        color: #FFF;
        background: #75bd27;
        border-color: #75bd27;
    }

    .ezoom-button--secondary.is-active,
    .ezoom-button--secondary:active {
        color: #FFF;
        background: #619c20;
        border-color: #619c20;
    }

    .ezoom-button--secondary:active {
        outline: 0
    }

    .ezoom-button--secondary.is-disabled,
    .ezoom-button--secondary.is-disabled:active,
    .ezoom-button--secondary.is-disabled:focus,
    .ezoom-button--secondary.is-disabled:hover {
        color: #FFF;
        background-color: #d5f1b8;
        border-color: #d5f1b8;
        cursor: not-allowed;
    }


    /* ---------- warning ----------------- */
    .ezoom-button--warning {
        color: #FFF;
        background-color: #FCAC00;
        border-color: #FCAC00;
    }

    .ezoom-button--warning:focus,
    .ezoom-button--warning:hover {
        color: #FFF;
        background: #e69b00;
        border-color: #e69b00;
    }

    .ezoom-button--warning.is-active,
    .ezoom-button--warning:active {
        color: #FFF;
        background: #c27f00;
        border-color: #c27f00;
    }

    .ezoom-button--warning:active {
        outline: 0
    }

    .ezoom-button--warning.is-disabled,
    .ezoom-button--warning.is-disabled:active,
    .ezoom-button--warning.is-disabled:focus,
    .ezoom-button--warning.is-disabled:hover {
        color: #FFF;
        background-color: #ffebc1;
        border-color: #ffebc1;
        cursor: not-allowed;
    }


    /* ---------- cancel ----------------- */
    .ezoom-button--cancel {
        color: #FFF;
        background-color: #ff3b31;
        border-color: #ff3b31;
    }

    .ezoom-button--cancel:focus,
    .ezoom-button--cancel:hover {
        color: #FFF;
        background: #dc372d;
        border-color: #dc372d;
    }

    .ezoom-button--cancel.is-active,
    .ezoom-button--cancel:active {
        color: #FFF;
        background: #c83027;
        border-color: #c83027;
    }

    .ezoom-button--cancel:active {
        outline: 0
    }

    .ezoom-button--cancel.is-disabled,
    .ezoom-button--cancel.is-disabled:active,
    .ezoom-button--cancel.is-disabled:focus,
    .ezoom-button--cancel.is-disabled:hover {
        color: #FFF;
        background-color: #f5c7c4;
        border-color: #f5c7c4;
        cursor: not-allowed;
    }


    /* ---------- white ----------------- */
    .ezoom-button--white {
        color: #FFF;
        background-color: #ff3b31;
        border-color: #ff3b31;
    }

    .ezoom-button--white:focus,
    .ezoom-button--white:hover {
        color: #FFF;
        background: #dc372d;
        border-color: #dc372d;
    }

    .ezoom-button--white.is-active,
    .ezoom-button--white:active {
        color: #FFF;
        background: #c83027;
        border-color: #c83027;
    }

    .ezoom-button--white:active {
        outline: 0
    }

    .ezoom-button--white.is-disabled,
    .ezoom-button--white.is-disabled:active,
    .ezoom-button--white.is-disabled:focus,
    .ezoom-button--white.is-disabled:hover {
        color: #FFF;
        background-color: #f5c7c4;
        border-color: #f5c7c4;
        cursor: not-allowed;
    }


</style>