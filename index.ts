import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";

const resourceGroupName = "ProyectoFinal3";

// Create an Azure resource (Storage Account)
const storageAccount = new storage.StorageAccount("sa", {
  // resourceGroupName: resourceGroup.name,
  resourceGroupName: resourceGroupName,
  sku: {
    name: storage.SkuName.Standard_LRS,
  },
  kind: storage.Kind.StorageV2,
});

// Export the primary key of the Storage Account
const storageAccountKeys = storage.listStorageAccountKeysOutput({
  resourceGroupName: resourceGroupName,
  accountName: storageAccount.name,
});

export const primaryStorageKey = storageAccountKeys.keys[0].value;
