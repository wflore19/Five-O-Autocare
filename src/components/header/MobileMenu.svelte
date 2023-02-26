<script>
	import { fly, fade, slide } from "svelte/transition";
	import { pages } from "../../data/pages";
	import { client } from "../../data/client";

	let tog = false;
	let sidebar_show = false;

	// $: console.log(sidebar_show);
	const submenu = pages.filter((item) => item.submenu);
	const sub = submenu.map((item) => item);
	const sub1 = sub.map((item) => item.submenu);

	const now = new Date();
	const currentDay = now.getDay();
	const currentHour = now.getHours();

	let status = "closed";
	let color;
	$: color =
		status === ("open until 5pm" || "open until 2pm") ? "green" : "red";

	if (
		currentDay >= 1 &&
		currentDay <= 5 &&
		currentHour >= 8 &&
		currentHour < 17
	) {
		status = "open until 5pm";
	} else if (currentDay === 6 && currentHour >= 9 && currentHour < 14) {
		status = "open until 2pm";
	} else {
		status = "closed";
	}
</script>

<div class="mobile-menu">
	<button on:click={() => (sidebar_show = !sidebar_show)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="white"
			fill="white"
			height="36px"
			width="36px"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	</button>

	{#if sidebar_show}
		<div transition:fade class="offcanvas-backdrop">
			<nav transition:fly={{ x: 400 }}>
				<button
					class="menu-button"
					on:click={() => (sidebar_show = !sidebar_show)}
				>
					<img src="/assets/icons/menu.svg" alt="menu" />
				</button>
				<div class="menu-head">
					<h2 class="menu-name">{client.name}</h2>
					<h4 class="menu-address">
						{client.address.lineOne}, {client.address.city}
					</h4>
					<h4 class="menu-phone">
						CALL NOW <a href={`tel:${client.phoneFormatted}`}
							>{client.phoneFormatted}</a
						>
					</h4>
					<p class="status">
						status: <span style="color: {color};">{status}</span>
					</p>
				</div>
				<ul class="submenu">
					{#each pages as item}
						{#if item.menuHadChildren}
							<li class="has-children">
								<a href={item.slug}>{item.name}</a>
								<button
									class={item.menuHadChildren ? "menu-item-has-children" : ""}
									on:click={() => (tog = !tog)}
								>
									{#if tog}
										<img
											src="/assets/icons/minus.svg"
											alt="menu"
											class="submenu-icon"
										/>
									{:else}
										<img
											src="/assets/icons/plus.svg"
											alt="menu"
											class="submenu-icon"
										/>
									{/if}
								</button>
							</li>
						{:else}
							<li class={item.menuHadChildren ? "menu-item-has-children" : ""}>
								<a href={item.slug}>{item.name}</a>
							</li>
						{/if}
						{#if item.menuHadChildren}
							{#if tog}
								<ul class="sub" transition:slide={{ y: 200, duration: 500 }}>
									{#each sub1[0] as subitem}
										<li>
											<a href={"services" + subitem.slug}>{subitem.name}</a>
										</li>
									{/each}
								</ul>
							{/if}
						{/if}
					{/each}
				</ul>
			</nav>
		</div>
	{/if}
</div>

<style lang="scss">
	@import "../../sass/variables.scss";
	nav {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 110;
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
		z-index: 100;
		width: 100vw;
		height: 100vh;
		background-color: #0000006c;
	}
	.menu-head {
		padding: 1rem;
	}
	.menu-head .status {
		margin-top: 1rem;
		font-weight: 600;
		text-transform: capitalize;
		text-align: center;
		font-size: clamp(1.075rem, 1.3028rem + 0.1082vw, 1.3rem);
	}
	.menu-head .menu-name {
		margin-top: 1rem;
		text-align: center;
		font-size: clamp(1.375rem, 1.3028rem + 0.3082vw, 1.5rem);
	}
	.menu-address {
		margin-top: 1rem;
		text-align: center;
	}
	.menu-phone {
		margin-top: 0.75rem;
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
		font-size: $font-size-lg;
		text-decoration: none;
		border-bottom: 1px solid rgba(10, 77, 60, 0.15);
		padding: 1rem;
		display: block;
		width: 100%;
	}
	ul a:visited {
		color: inherit;
	}

	.submenu > li:first-child a {
		border-top: 1px solid rgba(10, 77, 60, 0.15);
	}

	.submenu > li:nth-child(3) a {
		border-top: 1px solid rgba(10, 77, 60, 0.15);
	}

	.submenu > li {
		font-size: clamp(0.875rem, 0.8028rem + 0.3082vw, 1rem);
	}

	.menu-button {
		padding: 2rem 1rem 0.6rem;
	}

	.sub {
		padding-left: 1rem;
		margin-top: 0;
		list-style: none;
	}
	.sub li {
		font-size: clamp(0.75rem, 0.6778rem + 0.3082vw, 0.875rem);
		font-weight: 400;
	}

	.has-children {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.menu-item-has-children {
		display: flex;
		justify-content: center;
		width: 100px;
	}
	.has-children a {
		border-bottom: none;
	}

	.submenu-icon {
		width: 20px;
		height: 20px;
	}
</style>
