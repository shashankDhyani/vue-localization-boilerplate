<template>
    <div class="about">
        <div class="input-field">
            <label class="field-label">{{ $t('user.name') }}</label>
            <input class="form-control" value="" :placeholder="$t('user.name-placeholder')" />
        </div>
        <div class="input-field">
            <label class="field-label">{{ $t('user.place') }}</label>
            <input class="form-control" value="" :placeholder="$t('user.place-placeholder')" />
        </div>
        <footer>
            <button class="btn-success">{{ $t('common.save') }}</button>
            <button class="btn-default">{{ $t('common.cancel') }}</button>
        </footer>
    </div>
</template>
<style>
.input-field {
    
    .field-label {
        font-size: 18px;
        padding-right: 8px;
    }

    .form-control {
        padding: 4px;
    }
}

footer {
    display: flex;
    justify-content: space-around;
    gap: 24px;
    padding: 16px 24px;

    .btn-success {
        width: 120px;
        height: 48px;
        background-color: rgb(14, 119, 14);
        color: white;
        outline: none;
        border: none;
    }

    .btn-default {
        width: 120px;
        height: 48px;
        background-color: rgb(121, 124, 121);
        color: white;
        border: none;
    }
}</style>