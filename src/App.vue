<template>
  <div class="w-full h-full font-Inter">
    <!-- main wrapper -->
    <div
      class="h-full w-full py-8 px-8 bg-slate-300 box-border flex flex-col sm:flex sm:flex-col md:flex-col"
    >
      <div class="flex w-full py-2">
        <div class="bg-white w-full flex rounded-md">
          <div class="w-full flex flex-row items-center basis-1/2 px-4 py-4">
            <Avatar
              icon="pi pi-user"
              class="mr-2 rounded-md"
              :pt="{
                root: {
                  style: {
                    background: 'linear-gradient(to right, #da8cff, #9a55ff)',
                    color: '#ffffff'
                  }
                }
              }"
            />
            <h1 class="flex font-semibold text-lg phone:text-base">Employee Profile</h1>
          </div>
          <div class="w-full px-4 py-4 flex items-center justify-end basis-1/2">
            <Breadcrumb
              :home="home"
              :model="items"
              class="text-md phone:text-xs"
              :pt="{
                label: ({ props }) => ({
                  class:
                    props.index !== items.length - 1
                      ? 'text-blue-500 hover:text-blue-800'
                      : undefined
                })
              }"
            >
              <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                  <a :href="routerProps.href" v-bind="props.action">
                    <span v-bind="props.label">
                      {{ label }}
                    </span>
                  </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                  <span v-bind="props.label">
                    {{ label }}
                  </span>
                </a>
              </template>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <!-- Profile Card -->
      <div class="py-2 flex w-full flex-row justify-center items-center h-full">
        <!-- Avatar -->
        <div class="flex flex-row w-full">
          <div
            class="bg-white w-full h-full flex laptop:flex-row phone:flex-col py-4 px-4 rounded-md"
          >
            <div
              class="flex w-full flex-row phone:justify-center phone:items-center laptop:justify-normal"
            >
              <div class="flex-row flex">
                <div class="md:shrink-0 sm:shrink-0">
                  <router-link to="">
                    <img
                      src="https://crms-html.dreamguystech.com/template/assets/img/profiles/avatar-02.jpg"
                      alt="avatar"
                      class="rounded-full h-[120px] w-[120px] align-middle md:shrink-0"
                    />
                  </router-link>
                </div>
                <!-- Profile Details -->
                <div class="px-4 flex flex-col phone:justify-center">
                  <div class="flex flex-col">
                    <h3 class="font-medium text-2xl">John Doe</h3>
                    <div class="text-xs text-slate-500 font-medium mb-2">UI/UX Design Team</div>
                    <div class="text-xs text-slate-500 font-medium">Web Designer</div>
                    <div class="text-sm font-medium mt-2">Employee ID : FT-0001</div>
                    <div class="text-[13.125px] text-slate-500">Date of Join : 1st Jan 2013</div>
                  </div>
                  <div class="mt-6">
                    <ButtonVue
                      label="Send Message"
                      class="py-2 px-2 rounded-md text-white whitespace-nowrap"
                      size="large"
                      :pt="{
                        root: {
                          style: {
                            background: 'linear-gradient(to right, #9a55ff 0%, #fc6075 100%)'
                          }
                        }
                      }"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="border-dashed flex flex-col mr-6 border-r-2 phone:flex-row phone:border-b-2 phone:my-3 border-b-slate-400"
            ></div>
            <div class="px-4 h-full flex w-full">
              <ul class="w-full">
                <li>
                  <div class="flex mb-2">
                    <div class="mr-8 w-1/5">Phone:</div>
                    <div class="text-[15px] text-blue-500 hover:text-blue-800">
                      <router-link to=""> 9876543210 </router-link>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-2">
                    <div class="mr-8 w-1/5">Email:</div>
                    <div class="text-[15px] text-blue-500 hover:text-blue-800">
                      <router-link to=""> johndoe@example.com </router-link>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-2">
                    <div class="mr-8 w-1/5">Birthday:</div>
                    <div class="text-[15px] text-slate-500">24th July</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-2">
                    <div class="mr-8 w-1/5">Address:</div>
                    <div class="text-slate-500 text-[15px] block">
                      1861 Bayonne Ave, Manchester Township, NJ, 08759
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-2">
                    <div class="mr-8 w-1/5">Gender:</div>
                    <div class="text-slate-500 text-[15px]">Male</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-2">
                    <div class="mr-8 w-1/5">Reports to:</div>
                    <div class="flex items-center">
                      <Avatar
                        image="https://crms-html.dreamguystech.com/template/assets/img/profiles/avatar-16.jpg"
                        shape="circle"
                      />
                      <router-link to="" class="text-[15px] text-blue-500 hover:text-blue-800 pl-2">
                        Jeffery Lalor
                      </router-link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="h-fit">
              <router-link to="">
                <div
                  class="rounded-full bg-slate-200 hover:bg-purple-500 text-gray-500 hover:text-white w-[30px] h-[30px] flex items-center justify-center"
                >
                  <i class="font- pi pi-pencil text-[12px]"> </i>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Personal Information & Emergency Contact -->
      <div class="flex py-4 w-full laptop:flex-row phone:flex-col">
        <!-- Personal Information -->
        <div class="basis-1/2 laptop:pr-2 phone:pr-0 w-full">
          <div class="bg-white px-5 py-3 flex flex-row justify-between rounded-md phone:mb-3">
            <div class="flex flex-col w-full">
              <h3 class="font-bold text-lg mb-6">Personal Informations</h3>
              <ul class="h-[379px]">
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Passport No.</div>
                    <div class="w-full text-slate-500 text-[15px]">9876543210</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Passport Exp Date.</div>
                    <div class="w-full text-slate-500 text-[15px]">9876543210</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Tel</div>
                    <div class="w-full text-slate-500 text-[15px]">
                      <router-link to="" class="text-blue-500 hover:text-blue-800">
                        9876543210
                      </router-link>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Nationality</div>
                    <div class="w-full text-slate-500 text-[15px]">Nigerian</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Religion</div>
                    <div class="w-full text-slate-500 text-[15px]">Christian</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Marital Status</div>
                    <div class="w-full text-slate-500 text-[15px]">Married</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Employment of spouse</div>
                    <div class="w-full text-slate-500 text-[15px]">No</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">No. of children</div>
                    <div class="w-full text-slate-500 text-[15px]">2</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="h-fit">
              <router-link to="">
                <div
                  class="rounded-full bg-slate-200 hover:bg-purple-500 text-gray-500 hover:text-white w-[30px] h-[30px] flex items-center justify-center"
                >
                  <i class="font- pi pi-pencil text-[12px]"> </i>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Emergency Contact -->
        <div class="basis-1/2 laptop:pl-2 phone:pl-0">
          <div class="bg-white px-5 py-3 rounded-md">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col w-full">
                <h3 class="font-bold text-lg mb-2">Emergency Contact</h3>
                <!-- Primary Contact -->
                <h5 class="my-3 font-medium">Primary</h5>
                <ul class="h-[160px]">
                  <li>
                    <div class="flex mb-3">
                      <div class="w-full mr-5">Name</div>
                      <div class="w-full text-slate-500 text-[15px]">John Doe</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex mb-3">
                      <div class="w-full mr-5">Relationship</div>
                      <div class="w-full text-slate-500 text-[15px]">Father</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex mb-3">
                      <div class="w-full mr-5">Phone</div>
                      <div class="w-full text-slate-500 text-[15px]">
                        <text> 9876543210, 9876543210 </text>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex mb-2">
                      <div class="w-full mr-5">Nationality</div>
                      <div class="w-full text-slate-500 text-[15px]">Nigerian</div>
                    </div>
                  </li>
                </ul>
                <hr class="border-[1.5px] my-1" />
                <!-- Secondary Contact -->
                <h5 class="my-4 font-medium">Secondary</h5>
                <ul class="h-[120px]">
                  <li>
                    <div class="flex mb-3">
                      <div class="w-full mr-5">Name</div>
                      <div class="w-full text-slate-500 text-[15px]">Karen Willis</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex mb-3">
                      <div class="w-full mr-5">Relationship</div>
                      <div class="w-full text-slate-500 text-[15px]">Brother</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex mb-3">
                      <div class="w-full mr-5">Phone</div>
                      <div class="w-full text-slate-500 text-[15px]">9876543210, 9876543210</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="h-fit">
                <router-link to="">
                  <div
                    class="rounded-full bg-slate-200 hover:bg-purple-500 text-gray-500 hover:text-white w-[30px] h-[30px] flex items-center justify-center"
                  >
                    <i class="font- pi pi-pencil text-[12px]"> </i>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Bank Information & Family Informations -->
      <div class="flex w-full phone:flex-col laptop:flex-row">
        <!-- Bank Information -->
        <div class="basis-1/2 laptop:pr-2 phone:pr-0 phone:mb-3">
          <div class="bg-white px-5 py-3 rounded-md">
            <div class="flex flex-col">
              <h3 class="font-bold text-lg mb-6">Bank Information</h3>
              <ul class="h-[150px]">
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Bank Name</div>
                    <div class="w-full text-slate-500 text-[15px]">ICICI Bank</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">Bank account No.</div>
                    <div class="w-full text-slate-500 text-[15px]">159843014641</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">IFSC Code</div>
                    <div class="w-full text-slate-500 text-[15px]">ICI24504</div>
                  </div>
                </li>
                <li>
                  <div class="flex mb-3">
                    <div class="w-full mr-5">PAN No</div>
                    <div class="w-full text-slate-500 text-[15px]">TC000Y56</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Family Informations -->
        <div class="basis-1/2 laptop:pl-2 phone:pl-0 overflow-x-auto phone:mb-3">
          <div class="bg-white px-5 py-3 overflow-x-auto rounded-md">
            <div class="flex flex-col text-left">
              <h3 class="font-bold text-lg mb-2">Family Informations</h3>
              <!-- Primary Contact -->
              <DataTable
                table-style="min-width: 28rem"
                :value="family"
                class="h-[166px] whitespace-nowrap"
                editMode="row"
                v-model:editingRows="editingRows"
                @row-edit-save="onRowEditSave"
                tableClass="editable-cells-table"
                dataKey="id"
              >
                <Column
                  header="Name"
                  field="name"
                  :pt="{
                    headerCell: {
                      style: {
                        color: '#8c8989',
                        'padding-top': '5px',
                        'padding-bottom': '5px',
                        'font-weight': 500
                      }
                    }
                  }"
                  style="width: 20%"
                >
                  <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                  </template>
                </Column>
                <Column
                  field="relationship"
                  header="Relationship"
                  :pt="{
                    headerCell: {
                      style: {
                        color: '#8c8989',
                        'padding-top': '5px',
                        'padding-bottom': '5px',
                        'padding-right': '8px',
                        'font-weight': 500
                      }
                    }
                  }"
                  style="width: 20%"
                >
                  <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                  </template>
                </Column>
                <Column
                  field="dob"
                  header="Date of Birth"
                  :pt="{
                    headerCell: {
                      style: {
                        color: '#8c8989',
                        'padding-top': '4px',
                        'padding-bottom': '4px',
                        'font-weight': 500
                      }
                    }
                  }"
                  style="width: 20%"
                >
                  <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                  </template>
                </Column>

                <Column
                  field="contact"
                  header="Phone"
                  :pt="{
                    headerCell: {
                      style: {
                        color: '#8c8989',
                        'padding-top': '5px',
                        'padding-bottom': '5px',
                        'font-weight': 500
                      }
                    }
                  }"
                  style="width: 20%"
                >
                  <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                  </template>
                </Column>
                <Column
                  :rowEditor="true"
                  class="text-center justify-between"
                  style="width: 10%"
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const home = ref({ label: 'Dashboard', route: '/' })
const items = ref([{ label: 'Employee Profile' }])
const editingRows = ref([])

const family = ref([
  {
    id: 0,
    name: 'Richard',
    relationship: 'Brother',
    contact: '+1-202-555-0875',
    dob: 'Feb 16th, 2017 '
  },
  {
    id: 1,
    name: 'William',
    relationship: 'Uncle',
    contact: '+1-232-655-7875',
    dob: 'Sep 22nd, 2003'
  }
])

const onRowEditSave = (event) => {
  let { newData, index } = event

  family.value[index] = newData
}
</script>

<style>
td {
  padding-bottom: 5px;
  padding-right: 8px;
}
</style>
