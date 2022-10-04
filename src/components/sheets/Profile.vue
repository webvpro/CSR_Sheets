<template>
  <div
    class="col-span-12 shadow-xl md:col-span-6 card md:card-side bg-base-100"
  >
    <figure>
      <img
        class="object-fill w-full h-full border border-primary"
        src="/assets/images/ProfPthePortrait.png"
        alt="Album"
      />
    </figure>
    <div class="mx-auto card-body">
      <h2 class="text-2xl truncate card-title">Professor Penelope Pilwicken</h2>
      <p class="text-lg">
        <span>Is a, </span><span class="descriptor">Inquisitive</span>,
        <span class="sub-descriptor">Gnome</span>,
        <span class="type-alias">Arcane Engineer</span> who
        <span class="px-1 focus">Makes Magical Objects</span>
      </p>
      <div class="justify-around card-actions">
        <div class="flex flex-col items-center justify-center">
          <span class="pb-1 text-base font-semibold">Tier</span>
          <div class="w-12 h-12 text-xl btn-sm md:btn-xl btn btn-circle">
            <span class="">3</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="pb-1 text-base font-semibold">Effort</span>
          <div class="w-12 h-12 text-xl btn-sm md:btn-xl btn btn-circle">
            <span class="">3</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="pb-1 text-base font-semibold">XP</span>
          <div class="w-12 h-12 text-xl btn-sm md:btn-xl btn btn-circle">
            <span class="">3</span>
          </div>
        </div>
      </div>
      <div class="justify-around card-actions"></div>
      <div class="m-auto card-actions">
        <label class="text-lg font-semibold">Advancement</label>
        <ul class="w-full steps">
          <li data-content="★" class="step step-primary"></li>
          <li data-content="★" class="step step-primary"></li>
          <li data-content="●" class="step"></li>
          <li data-content="●" class="step"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
