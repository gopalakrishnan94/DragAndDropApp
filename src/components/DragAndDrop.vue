<template>
  <v-app>
    <div class="row">
      <div class="col-6">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <h2>List-1</h2>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn color="success darken-1" icon dark @click="isAdd1 = true">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
        <draggable
          class="list-group"
          :componentData="componentData"
          ghost-class="ghost"
          :list="list1"
          :animation="100"
          group="people"
          @change="log1"
        >
          <div class="list-group-item pa-1" v-for="(element, ind) in list1" :key="element.name">
            <v-card :elevation="8">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title v-text="element.name"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-btn color="error darken-1" icon dark @click="removeCard(ind, list1)">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </draggable>
      </div>

      <div class="col-6">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">
                <h2>List-2</h2>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn color="success darken-1" icon dark @click="isAdd2 = true">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
        <draggable
          class="list-group"
          :componentData="componentData"
          :animation="100"
          ghost-class="ghost"
          :list="list2"
          group="people"
          @change="log2"
        >
          <div class="list-group-item pa-1" v-for="(element, ind) in list2" :key="element.name">
            <v-card :elevation="8">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title v-text="element.name"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-btn color="error darken-1" icon dark @click="removeCard(ind, list2)">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </draggable>
      </div>
    </div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Confirm?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialogEvent('disAgree')">Disagree</v-btn>
            <v-btn color="green darken-1" text @click="dialogEvent('Agree')">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="isAdd1" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">
            <span>Add List-1</span>
            <v-spacer></v-spacer>
            <v-btn color="error darken-1" icon dark @click="isAdd1 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <br>
            <v-text-field clearable v-model="name" label="Name" solo></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="addCard(name, list1)">Add</v-btn>
            <v-btn color="error darken-1" text @click="isAdd1 = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="isAdd2" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">
            <span>Add List-2</span>
            <v-spacer></v-spacer>
            <v-btn color="error darken-1" icon dark @click="isAdd2 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <br>
            <v-text-field clearable v-model="name" label="Name" solo></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="addCard(name, list2)">Add</v-btn>
            <v-btn color="error darken-1" text @click="isAdd2 = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<style>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.special1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-left: 12px;
  margin-right: 12px;
}
</style>

<script>
import draggable from "vuedraggable";

export default {
  name: "DragAndDrop",
  components: { draggable },
  data: () => ({
    list1: [
      {
        name: "John",
        id: 1
      },
      {
        name: "Test1",
        id: 2
      },
      {
        name: "Test2",
        id: 3
      }
    ],
    list2: [
      {
        name: "Test",
        id: 4
      }
    ],
    name: '',
    dialog: false,
    isAdd1: false,
    isAdd2: false,
    componentData: {
      props: {
        type: "transition",
        name: "flip-list"
      }
    },
    fromList1: {},
    fromList2: {}
  }),
  methods: {
    log1(evt) {
      console.log(evt);
      this.fromList1 = evt;
      this.dialog = true;
    },
    log2(eve) {
      console.log(eve);
      this.fromList2 = eve;
      this.dialog = true;
    },
    removeCard(ind, data) {
      data.splice(ind, 1);
    },
    addCard(name, data) {
      let d = {
        name: name,
        id: data.length + 1,
      }
      data.unshift(d);
      this.isAdd1 = false;
      this.isAdd2 = false;
      this.name = '';
    },
    dialogEvent(data) {
      if (data == "disAgree") {
        console.log(this.fromList1);
        console.log(this.fromList2);
        if (this.fromList1.removed) {
          this.list1.splice(
            this.fromList1.removed.oldIndex,
            0,
            this.fromList1.removed.element
          );
        }
        if (this.fromList1.added) {
          this.list1.splice(this.fromList1.added.newIndex, 1);
        }
        if (this.fromList1.moved) {
          if (this.fromList1.moved.element) {
            this.list1.splice(this.fromList1.moved.newIndex, 1);
            this.list1.splice(
              this.fromList1.moved.oldIndex,
              0,
              this.fromList1.moved.element
            );
          }
        }
        if (this.fromList2.removed) {
          this.list2.splice(
            this.fromList2.removed.oldIndex,
            0,
            this.fromList2.removed.element
          );
        }
        if (this.fromList2.added) {
          this.list2.splice(this.fromList2.added.newIndex, 1);
        }
        if (this.fromList2.moved) {
          if (this.fromList2.moved.element) {
            this.list2.splice(this.fromList2.moved.newIndex, 1);
            this.list2.splice(
              this.fromList2.moved.oldIndex,
              0,
              this.fromList2.moved.element
            );
          }
        }
        this.dialog = false;
        this.fromList1 = {};
        this.fromList2 = {};
      }
      if (data == "Agree") {
        this.fromList1 = {};
        this.fromList2 = {};
        this.dialog = false;
      }
    }
  },
  created() {}
};
</script>