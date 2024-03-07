<!-- LoginPage.svelte -->
<script lang="ts">
    let email: string = "";
    let password = "";
    let isLoading = false;

    const handleLogin = async () => {
        isLoading = true;
        try {
            const data = "";
            console.log("Login successful:", data);
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            isLoading = false;
        }
    };
</script>

<main class="container mx-auto p-8">
    <div class="max-w-md mx-auto">
        <div class="card p-8 shadow-xl">
            <header class="text-center mb-6">
                <h1 class="text-3xl font-bold">Login</h1>
            </header>
            <div>
                <div class="input-group mb-4">
                    <span class="input-group-shim">
                        <i class="lucide lucide-mail" />
                    </span>
                    <input
                        type="email"
                        id="email"
                        class="input"
                        placeholder="Enter your email"
                        bind:value={email}
                        required
                    />
                </div>
                <div class="input-group mb-6">
                    <span class="input-group-shim">
                        <i class="lucide lucide-lock" />
                    </span>
                    <input
                        type="password"
                        id="password"
                        class="input"
                        placeholder="Enter your password"
                        bind:value={password}
                        required
                    />
                </div>
                <button
                    class="btn variant-filled-primary w-full"
                    disabled={isLoading}
                    on:click={handleLogin}
                >
                    {#if isLoading}
                        <span class="animate-pulse">Loading...</span>
                    {:else}
                        Login
                    {/if}
                </button>
            </div>
        </div>
    </div>
</main>
