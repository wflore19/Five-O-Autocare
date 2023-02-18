<script>
	let sidebar_show = false;
	import { fly, fade } from "svelte/transition";

	$: sidebar_show;
</script>

<div class="mobile-menu">
	<button on:click={() => (sidebar_show = !sidebar_show)}>
		<img src="/assets/icons/menu.svg" alt="menu" />
	</button>

	{#if sidebar_show}
		<div transition:fade class="offcanvas-backdrop">
			<nav transition:fly={{ x: 400 }}>
				<button
					class="menu-button"
					on:click={() => (sidebar_show = !sidebar_show)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="black"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="black"
						width="30"
						height="30"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 9h16.5m-16.5 6.75h16.5"
						/>
					</svg>
				</button>
				<h4 class="menu-address">422 N Stonestreet Ave, Rockville</h4>
				<h4 class="menu-phone">
					Call now: <a href="tel:0000000000">(000) 000 0000</a>
				</h4>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/services">Services</a></li>
					<li><a href="/">Computers</a></li>
					<li><a href="/">Technology</a></li>
				</ul>
			</nav>
		</div>
	{/if}
</div>

<style>
	nav {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 10;
		height: 100%;

		border-left: 1px solid #aaa;
		background: #fff;
		overflow-y: auto;
		width: 50%;
	}
	@media only screen and (max-width: 550px) {
		nav {
			width: 80%;
		}
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		/* padding: 2rem 1rem 0.6rem; */
	}
	.offcanvas-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100vw;
		height: 100vh;
		background-color: #0000006c;
	}
	.menu-address {
		margin-top: 1rem;
		text-align: center;
		padding: 1rem;
	}
	.menu-phone {
		text-align: center;
	}
	.menu-phone a {
		color: red;
		text-decoration: none;
	}
	ul {
		margin-top: 3rem;
		list-style: none;
		padding: 0;
		font-weight: 500;
	}
	/* ul li:not(:last-child) {
		padding-bottom: 1rem;
	} */
	ul a {
		text-decoration: none;
		border-bottom: 1px solid rgba(10, 77, 60, 0.15);
		padding: 1rem 1rem;
		display: block;
		width: 100%;
	}
	ul a:visited {
		color: inherit;
	}

	ul li:first-child a {
		border-top: 1px solid rgba(10, 77, 60, 0.15);
	}

	.menu-button {
		padding: 2rem 1rem 0.6rem;
	}
</style>
