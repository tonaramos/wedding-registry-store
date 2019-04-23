<template>
    <Page>
        <ActionBar title="D & A Wedding registry!" android:flat="true"/>
        <TabView android:tabBackgroundColor="#53ba82"
                 android:tabTextColor="#c4ffdf"
                 android:selectedTabTextColor="#ffffff"
                 androidSelectedTabHighlightColor="#ffffff">
            <TabViewItem title="B remainding" :text="'$' +amount">
                <GridLayout columns="*" rows="*">
                    <Label class="Budget Remaindnig" :text="'$' +amount" col="0" row="0"/>
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="BUY">
                <GridLayout columns="*" rows="*">
                    <Label class="message" text="Tab 2 Content" col="0" row="0"/>
                </GridLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Welcome',
        amount: 1000
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
