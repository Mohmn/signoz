export const licensesSuccessResponse = {
	status: 'success',
	data: {
		trialStart: 1695992049,
		trialEnd: 1697806449,
		onTrial: true,
		workSpaceBlock: false,
		trialConvertedToSubscription: false,
		gracePeriodEnd: -1,
		licenses: [
			{
				key: 'testKeyId1',
				activationId: 'testActivationId1',
				ValidationMessage: '',
				isCurrent: false,
				planKey: 'ENTERPRISE_PLAN',
				ValidFrom: '2022-10-13T13:48:51Z',
				ValidUntil: '2023-10-13T19:37:37Z',
				status: 'VALID',
			},
			{
				key: 'testKeyId2',
				activationId: 'testActivationId2',
				ValidationMessage: '',
				isCurrent: true,
				planKey: 'ENTERPRISE_PLAN',
				ValidFrom: '2023-09-12T11:35:43Z',
				ValidUntil: '2024-09-11T17:24:29Z',
				status: 'VALID',
			},
		],
	},
};

export const trialConvertedToSubscriptionResponse = {
	status: 'success',
	data: {
		trialStart: 1695992049,
		trialEnd: 1697806449,
		onTrial: true,
		workSpaceBlock: false,
		trialConvertedToSubscription: true,
		gracePeriodEnd: -1,
		licenses: [
			{
				key: 'testKeyId1',
				activationId: 'testActivationId1',
				ValidationMessage: '',
				isCurrent: false,
				planKey: 'ENTERPRISE_PLAN',
				ValidFrom: '2022-10-13T13:48:51Z',
				ValidUntil: '2023-10-13T19:37:37Z',
				status: 'VALID',
			},
			{
				key: 'testKeyId2',
				activationId: 'testActivationId2',
				ValidationMessage: '',
				isCurrent: true,
				planKey: 'ENTERPRISE_PLAN',
				ValidFrom: '2023-09-12T11:35:43Z',
				ValidUntil: '2024-09-11T17:24:29Z',
				status: 'VALID',
			},
		],
	},
};

export const notOfTrailResponse = {
	...trialConvertedToSubscriptionResponse,
	data: {
		...trialConvertedToSubscriptionResponse.data,
		onTrial: false,
		trialConvertedToSubscriptionResponse: false,
		trialStart: -1,
		trialEnd: -1,
	},
};

export const workSpaceBlockResponse = {
	...trialConvertedToSubscriptionResponse,
	data: {
		...trialConvertedToSubscriptionResponse.data,
		onTrial: false,
		trialConvertedToSubscriptionResponse: false,
		trialStart: -1,
		trialEnd: -1,
		workSpaceBlock: true,
	},
};
