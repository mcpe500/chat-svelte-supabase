<script>
    import { onMount } from "svelte";
    import { focusTrap } from "@skeletonlabs/skeleton";
    let loading = true;
    let isFocused = true;
    onMount(async () => {
        // Simulate network request
        loading = false;
    });
</script>

<main>
    {#if loading}
        <!-- Skeleton UI -->
        <div class="skeleton-input"></div>
        <div class="skeleton-input"></div>
        <div class="skeleton-button"></div>
    {:else}
        <!-- Actual Login Form -->

        <form use:focusTrap={isFocused}>
            <input
                data-focusindex="1"
                type="text"
                placeholder="Name"
                value="Bob"
            />
            <!-- Email will be the first focused -->
            <input data-focusindex="0" type="email" placeholder="Email" />
            <button class="btn variant-filled-primary">Submit</button>
        </form>
    {/if}
</main>

<!-- <style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
    }

    .skeleton-input,
    input {
        height: 40px;
        width: 200px;
        margin: 10px 0;
        background: #ddd;
        border-radius: 5px;
    }

    .skeleton-button,
    button {
        height: 50px;
        width: 100px;
        margin: 10px 0;
        background: #ddd;
        border-radius: 5px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    label {
        font-size: 0.9em;
        color: #333;
    }

    input {
        padding: 10px;
        border: none;
    }

    button {
        border: none;
        background-color: #007bff;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style> -->
